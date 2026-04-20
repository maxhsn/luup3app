// tutorials/runtime/Tutorial.jsx
// Top-level component that ties script + scene + visuals together.
// Usage:
//   <Stage width={1920} height={1080} duration={script.duration}>
//     <Tutorial script={script} theme={theme} sceneComponent={Scene} />
//   </Stage>

const {
  useTime, Easing, clamp,
  compileScript, pageAt, stateAt, typingAt, activeCaption, activeToast,
  cursorPositionAt, clickTimesFrom, useTargetRects,
  TutorialCursor, TutorialCaption, TutorialToast,
  SuccessBurst, AmbientDust, VignettePulse, useBreathingTransform,
} = window;

function Tutorial({ script, theme, sceneComponent: SceneComponent, stageWidth = 1920, stageHeight = 1080 }) {
  const time = useTime();
  const stageRef = React.useRef(null);
  const compiled = React.useMemo(() => compileScript(script), [script]);
  const rects = useTargetRects(stageRef);

  const fallbackPage = script.steps?.[0]?.page || 'home';
  const page = pageAt(compiled.pageKeys, fallbackPage, time);
  const sceneState = stateAt(compiled.statePatches, time);
  const typed = typingAt(compiled.typeDecls, time);
  const caption = script.captions !== false ? activeCaption(compiled.captions, time) : null;
  const toast = activeToast(compiled.toasts, time);
  const cursorPos = cursorPositionAt(compiled.cursorKeys, rects, time);
  const clickTimes = React.useMemo(() => clickTimesFrom(compiled.cursorKeys), [compiled.cursorKeys]);
  const breath = useBreathingTransform(time, clickTimes);

  return (
    <div ref={stageRef} style={{
      width: '100%', height: '100%', position: 'relative',
      background: theme.colors.bg === '#fafaf9' ? '#0f0f10' : '#0a0a0a',
      overflow: 'hidden',
    }}>
      <AmbientDust count={28} stage={{ width: stageWidth, height: stageHeight }} />

      {/* Scene wrapper with breathing camera */}
      <div style={{
        position: 'absolute', inset: 0,
        transform: `translate(${breath.tx}px, ${breath.ty}px) scale(${breath.scale})`,
        transformOrigin: 'center center',
        willChange: 'transform',
      }}>
        <SceneComponent
          page={page}
          state={sceneState}
          typed={typed}
          theme={theme}
          data={script.data || {}}
          time={time}
          stageWidth={stageWidth}
          stageHeight={stageHeight}
        />
      </div>

      <SuccessBurst effects={compiled.effects} rects={rects} time={time}
        accent={theme.colors.accent} emerald={theme.colors.emerald} />
      <VignettePulse time={time} clickTimes={clickTimes} />
      <TutorialToast toast={toast} time={time} theme={theme} />
      <TutorialCaption caption={caption} time={time} font={theme.fonts.display} />
      <TutorialCursor pos={cursorPos} accent={theme.colors.accent} clickTimes={clickTimes} time={time} />

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes blink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }
      `}</style>
    </div>
  );
}

// Scene registry — scenes register themselves by id, Tutorial resolves at runtime
window.SCENE_REGISTRY = window.SCENE_REGISTRY || {};
function registerScene(id, component) {
  window.SCENE_REGISTRY[id] = component;
}

Object.assign(window, { Tutorial, registerScene });
