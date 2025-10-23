import React from 'react';

interface SnapshotData {
  problem?: string;
  constraint?: string;
  result?: string;
}

interface SnapshotProps {
  data?: SnapshotData;
  children?: React.ReactNode;
}

export function Snapshot({ data, children }: SnapshotProps) {
  if (children) {
    return (
      <div className="my-8 md:my-12 p-6 md:p-8 bg-base-900 border border-base-800 rounded-lg">
        <div className="prose prose-lg max-w-none">{children}</div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="my-8 md:my-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {data.problem && (
        <div className="p-6 bg-base-900 border border-base-800 rounded-lg">
          <h3 className="text-lg font-heading font-semibold text-aqua-400 mb-3">
            Problem
          </h3>
          <p className="text-text-100">{data.problem}</p>
        </div>
      )}
      {data.constraint && (
        <div className="p-6 bg-base-900 border border-base-800 rounded-lg">
          <h3 className="text-lg font-heading font-semibold text-aqua-400 mb-3">
            Constraint
          </h3>
          <p className="text-text-100">{data.constraint}</p>
        </div>
      )}
      {data.result && (
        <div className="p-6 bg-base-900 border border-base-800 rounded-lg">
          <h3 className="text-lg font-heading font-semibold text-aqua-400 mb-3">
            Result
          </h3>
          <p className="text-text-100">{data.result}</p>
        </div>
      )}
    </div>
  );
}
