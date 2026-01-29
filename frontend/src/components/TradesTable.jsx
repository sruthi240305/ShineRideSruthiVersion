import React from 'react';
import { Trash2, RotateCcw, Edit2 } from "lucide-react";

const defaultTrades = [
  {
    id: 1,
    symbol: "TSLA",
    action: "BUY",
    company: "Tesla, Inc.",
    amount: "$30,021.23",
    date: "Jan 13, 2025",
    status: "Processing",
    user: "Olivia Rhye",
    email: "olivia@untitledui.com",
  },
  {
    id: 2,
    symbol: "MTCH",
    action: "SELL",
    company: "Match Group, Inc.",
    amount: "$10,045.00",
    date: "Jan 13, 2025",
    status: "Success",
    user: "Phoenix Baker",
    email: "phoenix@untitledui.com",
  },
  {
    id: 3,
    symbol: "DDOG",
    action: "BUY",
    company: "Datadog Inc",
    amount: "$40,132.16",
    date: "Jan 13, 2025",
    status: "Success",
    user: "Lana Steiner",
    email: "lana@untitledui.com",
  },
  {
    id: 4,
    symbol: "ARKG",
    action: "BUY",
    company: "ARK Genomic Revolution ETF",
    amount: "$22,665.12",
    date: "Jan 13, 2025",
    status: "Declined",
    user: "Demi Wilkinson",
    email: "demi@untitledui.com",
  },
];

const defaultColumns = [
  {
    header: 'Trade',
    render: (row) => (
      <div>
        <p className="font-medium">{row.symbol} {row.action}</p>
        <p className="text-xs text-[var(--secondary)]">{row.company}</p>
      </div>
    )
  },
  { header: 'Order amount', accessor: 'amount' },
  { header: 'Delivery date', accessor: 'date' },
  {
    header: 'Status',
    render: (row) => (
      <span className="px-3 py-1 rounded-full text-xs" style={{ border: '1px solid var(--secondary)', color: 'var(--active)' }}>
        {row.status}
      </span>
    )
  },
  {
    header: 'Executed by',
    render: (row) => (
      <div>
        <p className="font-medium">{row.user}</p>
        <p className="text-xs text-[var(--secondary)]">{row.email}</p>
      </div>
    )
  },
];

export default function TradesTable({ title, hideHeader = false, hidePagination = true, data = defaultTrades, columns = defaultColumns, showDefaultActions = false }) {

  return (
    <div className="text-white bg-[var(--bg-foundation)]">
      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--secondary)' }}>
        {!hideHeader && (
          <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: '1px solid var(--secondary)' }}>
            <h2 className="font-semibold">{title || "All trades"} <span className="text-[var(--secondary)]">({data.length})</span></h2>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b" style={{ color: 'var(--secondary)', borderColor: 'var(--secondary)' }}>
              <tr>
                {columns.map((col, index) => (
                  <th key={index} className="p-4 text-left">{col.header}</th>
                ))}
                {showDefaultActions && <th className="p-4"></th>}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={row.id || rowIndex} className="transition hover:bg-[var(--hover)]" style={{ borderBottom: '1px solid var(--secondary)' }}>
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="p-4">
                      {col.render ? col.render(row) : row[col.accessor]}
                    </td>
                  ))}
                  {showDefaultActions && (
                    <td className="p-4 flex gap-3 text-[var(--secondary)] justify-end">
                      <Edit2 size={16} className="cursor-pointer hover:text-white" />
                      <Trash2 size={16} className="cursor-pointer hover:text-red-400" />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer (optional pagination) */}
        {!hidePagination && (
          <div className="flex justify-between items-center px-6 py-4 text-sm">
            <span className="text-[var(--secondary)]">Page 1 of 1</span>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-xl" style={{ backgroundColor: 'var(--hover)', color: 'var(--active)' }}>Previous</button>
              <button className="px-4 py-2 rounded-xl" style={{ backgroundColor: 'var(--hover)', color: 'var(--active)' }}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
