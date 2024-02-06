import { useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
  birthdate: string;
  birthmonth: string;
}


const Home:React.FC = () => {
  const [people,setPeople] = useState<Person[]>([])

const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target?.result as string;
        parseCSV(content);
      };

      reader.readAsText(file);
    }
  };

  const parseCSV = (content: string) => {
    const rows = content.split("\n").map((row) => row.split(","));

    const mappedPeople: Person[] = rows.slice(1).map((item: string[]) => ({
      firstName: item[0],
      lastName: item[1],
      birthdate: item[2],
      birthmonth: item[3],
    }));

    setPeople(mappedPeople);
  };

  const downloadBirthdayTemplate = () => {
    const csvContent =
      "firstname,lastname,birthday,birthmonth\npromise,okafor,22,7";

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "birthday_template.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };


  return (
     <div className="max-w-2xl w-full p-4 bg-white">
        <h1 className="text-3xl font-bold mb-4">Celebration Reminder</h1>

        <input type="file" accept=".csv" onChange={handleFile} />

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
          onClick={downloadBirthdayTemplate}
        >
          Download Birthday Template
        </button>

        {people.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Celebrations:</h2>
            <ul>
              {people.map((person, index) => (
                <li key={index} className="mb-2">
                  {`${person.firstName} ${person.lastName} - ${person.birthdate} (${person.birthmonth})`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
  )
}

export default Home