// tutorials/scenes/merchant.dashboard.desktop.jsx
// Adapter that wraps the existing merchant-ui.jsx components into the
// scene-component contract: props { page, state, typed, theme, data, time, stageWidth, stageHeight }
//
// Reuses: MerchantSidebar, MerchantTopBar, CommandCenterPage, MissionManagerPage,
//         CreateMissionModal, ChromeWindow.
//
// Pages supported:
//   - "command-center"
//   - "missions"
//   - "missions/create-modal" (modal layered over missions page)

const {
  ChromeWindow,
  MerchantSidebar, MerchantTopBar,
  CommandCenterPage, MissionManagerPage, CreateMissionModal,
} = window;

function MerchantDashboardDesktopScene({ page, state, typed, theme, data, time, stageWidth, stageHeight }) {
  const onMissions = page === 'missions' || page === 'missions/create-modal';
  const showModal  = page === 'missions/create-modal';

  // Window dims — fit within stage
  const winW = Math.min(1700, stageWidth - 100);
  const winH = Math.min(960,  stageHeight - 100);
  const winX = (stageWidth  - winW) / 2;
  const winY = (stageHeight - winH) / 2;

  // Command Center reveal phase
  const ccPhase = Math.min(1, time / 2.5);

  // Mission Manager phase
  const mmAnim = onMissions ? Math.min(1, Math.max(0, (time - 9.5) / 0.6)) : 0;

  // Modal visual progress (driven by `state.modalProgress` if set, else 1)
  const modalProgress = state.modalProgress != null ? state.modalProgress : (showModal ? 1 : 0);

  // Form values: prefer state.<field>, fall back to typed[<target>], else ''
  const titleVal       = state.title       ?? typed['merchant.modal.create.field.title']       ?? '';
  const descriptionVal = state.description ?? typed['merchant.modal.create.field.description'] ?? '';
  const capacityVal    = state.capacity    ?? '50';
  const cashVal        = state.cash        ?? '25';
  const pointsVal      = state.points      ?? '250';

  let highlightField = state.highlightField || null;
  if (!highlightField) {
    if (typed['merchant.modal.create.field.title']       !== undefined && titleVal       !== '' && titleVal.length < 30) highlightField = 'title';
    if (typed['merchant.modal.create.field.description'] !== undefined && descriptionVal !== '' && descriptionVal.length < 90) highlightField = 'description';
  }

  return (
    <div style={{ position: 'absolute', left: winX, top: winY }}>
      <ChromeWindow
        width={winW} height={winH}
        tabs={[
          { title: `${data.merchant?.name || 'Merchant'} · Activate` },
        ]}
        activeIndex={0}
        url={onMissions ? 'activate.luup.io/brand/missions' : 'activate.luup.io/brand/overview'}
      >
        <div style={{
          width: '100%', height: '100%', display: 'flex',
          background: '#fafaf9', position: 'relative', overflow: 'hidden',
        }}>
          <MerchantSidebar
            active={onMissions ? 'missions' : 'overview'}
            highlight={state.sidebarHighlight || null}
            launchProgress={state.launchProgress || 60}
            guideExpanded={state.guideExpanded || false}
          />

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
            <MerchantTopBar pageTitle={onMissions ? 'Missions' : 'Command Center'} />

            <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
              {!onMissions && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
                  <CommandCenterPage animatePhase={ccPhase} />
                </div>
              )}

              {onMissions && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
                  <MissionManagerPage
                    highlight={state.missionsHighlight || null}
                    withNewMission={state.withNewMission || false}
                    animatePhase={mmAnim}
                  />
                </div>
              )}

              <CreateMissionModal
                visible={showModal}
                modalProgress={modalProgress}
                title={titleVal}
                description={descriptionVal}
                capacity={capacityVal}
                cashReward={cashVal}
                pointsReward={pointsVal}
                difficulty={state.difficulty || 'Easy'}
                rewardType={state.rewardType || 'mixed'}
                highlightField={highlightField}
                highlightLaunch={state.highlightLaunch || false}
                submitting={state.submitting || false}
                success={state.success || false}
              />
            </div>
          </div>
        </div>
      </ChromeWindow>
    </div>
  );
}

if (typeof registerScene !== 'undefined') {
  registerScene('merchant.dashboard.desktop', MerchantDashboardDesktopScene);
}
window.MerchantDashboardDesktopScene = MerchantDashboardDesktopScene;
