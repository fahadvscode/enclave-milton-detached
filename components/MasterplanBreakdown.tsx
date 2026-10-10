import Link from "next/link";
import { housingMix, housingMixNote } from "@/lib/content";

export function MasterplanBreakdown({ condensed = false }: { condensed?: boolean }) {
  const rows = condensed ? housingMix.slice(0, 6) : housingMix;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="data-table">
          <caption className="sr-only">
            Approved housing mix at 6071 Fourth Line compared with what Sundial Homes has released
          </caption>
          <thead>
            <tr>
              <th scope="col">Housing type</th>
              <th scope="col">Included in approved plan (Town file 24T-21006/M)</th>
              <th scope="col">Released by Sundial Homes?</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.type}>
                <th scope="row" className="normal-case tracking-normal text-text-primary">
                  {row.type}
                </th>
                <td>{row.approved}</td>
                <td>{row.released}</td>
                <td>
                  {row.status}
                  {row.registerLink ? (
                    <>
                      {" "}
                      — <Link href="/register" className="text-link">register for updates</Link>
                    </>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {condensed ? null : <p className="prose-measure mt-5 text-base leading-relaxed">{housingMixNote}</p>}
    </div>
  );
}
