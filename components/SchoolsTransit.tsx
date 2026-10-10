import { catchmentSentence, highwayRows, schoolRows, transitRows } from "@/lib/content";

export function SchoolsTransit() {
  return (
    <div className="grid gap-12">
      <div>
        <h2 className="text-3xl md:text-4xl">Transit</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="data-table">
            <caption className="sr-only">Transit near The Enclave in Milton</caption>
            <thead>
              <tr>
                <th scope="col">Field</th>
                <th scope="col">Detail</th>
              </tr>
            </thead>
            <tbody>
              {transitRows.map((row) => (
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
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl">Highway access</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="data-table">
            <caption className="sr-only">Highway access near Britannia Road in Milton</caption>
            <thead>
              <tr>
                <th scope="col">Field</th>
                <th scope="col">Detail</th>
              </tr>
            </thead>
            <tbody>
              {highwayRows.map((row) => (
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
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl">Schools near The Enclave in Milton</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="data-table">
            <caption className="sr-only">Schools near The Enclave in Milton</caption>
            <thead>
              <tr>
                <th scope="col">Level</th>
                <th scope="col">School</th>
                <th scope="col">Board</th>
              </tr>
            </thead>
            <tbody>
              {schoolRows.map((row) => (
                <tr key={row.name}>
                  <td>{row.level}</td>
                  <td>{row.name}</td>
                  <td>{row.board}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="prose-measure mt-4 text-base leading-relaxed">{catchmentSentence}</p>
      </div>
    </div>
  );
}
