import { FaReact, FaNode, FaPython } from "react-icons/fa";
import { SiJavascript, SiCss3, SiTypescript } from "react-icons/si";

const iconArray = [<FaNode />, <FaPython />, <FaReact />, <SiCss3 />, <SiJavascript />, <SiTypescript />
]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='table'>
        <table>
          <tbody>
            {[...Array(4)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[...Array(3)].map((_, colIndex) => (
                  <td key={colIndex} className='p-2'>
                    <div className='w-[30vw] h-[20vh] flex justify-center items-center text-5xl bg-slate-500'>
                      {iconArray[Math.floor(Math.random() * 6)]}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
