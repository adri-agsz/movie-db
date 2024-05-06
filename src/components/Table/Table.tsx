import React from 'react';
import { ITable } from './types';
import './Table.css'

const Table: React.FC<ITable> = ({ data }) => {
  return (
    <div className="overflow-auto rounded-lg shadow no-scrollbar">
      <table className="w-full whitespace-nowrap rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-950">
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Agent</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">ID Agent</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Motive</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Call Start</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Duration</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Channel</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Score</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map(call => (
            <tr key={call.id}>
              <td className="px-6 py-4 whitespace-nowrap">{call.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{call.agent}</td>
              <td className="px-6 py-4 whitespace-nowrap">{call.id_agent}</td>
              <td className="px-6 py-4 whitespace-nowrap">{call.motive}</td>
              <td className="px-6 py-4 whitespace-nowrap">{call.call_start.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">{call.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap">{call.channel}</td>
              <td className="px-6 py-4 whitespace-nowrap">{call.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
