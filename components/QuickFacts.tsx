import { quickFacts } from "@/lib/content";

export function QuickFacts() {
  return (
    <div className="overflow-x-auto">
      <table className="data-table">
        <caption className="sr-only">Quick facts for The Enclave detached homes in Milton</caption>
        <thead>
          <tr>
            <th scope="col">Field</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {quickFacts.map((row) => (
            <tr key={row.field}>
              <th scope="row" className="normal-case tracking-normal text-text-primary">
                {row.field}
              </th>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
