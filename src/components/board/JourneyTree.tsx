import { ReactNode } from "react";

interface TreeNode {
  label: string;
  icon?: string;
  children?: TreeNode[];
  accent?: boolean;
  description?: string;
}

interface JourneyTreeProps {
  root: TreeNode;
  className?: string;
}

const TreeNodeComponent = ({ node, isLast, depth }: { node: TreeNode; isLast: boolean; depth: number }) => {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col">
      <div className="flex items-start">
        {depth > 0 && (
          <div className="flex flex-col items-center mr-3 mt-0">
            <div className="w-px h-3 tree-line" />
            <div className="w-4 h-px tree-line" />
          </div>
        )}
        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all ${
            node.accent
              ? "bg-primary/10 border-primary/20 text-foreground"
              : "bg-card border-border text-foreground"
          } ${depth === 0 ? "shadow-sm" : ""}`}
        >
          {node.icon && (
            <span className="text-sm flex-shrink-0">{node.icon}</span>
          )}
          <div>
            <span className="text-[12px] font-semibold tracking-tight block leading-tight">{node.label}</span>
            {node.description && (
              <span className="text-[10px] text-muted-foreground block mt-0.5 leading-snug">{node.description}</span>
            )}
          </div>
        </div>
      </div>
      {hasChildren && (
        <div className={`${depth > 0 ? "ml-6" : "ml-5"} border-l border-border pl-0`}>
          {node.children!.map((child, i) => (
            <TreeNodeComponent
              key={i}
              node={child}
              isLast={i === node.children!.length - 1}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const JourneyTree = ({ root, className = "" }: JourneyTreeProps) => {
  return (
    <div className={`animate-fade-in ${className}`}>
      <TreeNodeComponent node={root} isLast depth={0} />
    </div>
  );
};

export default JourneyTree;
