// Pregunta 1
const q1AccountsArr = [
  { id: 1, id_ejecutivo: 1, id_cliente: 1, monto: 2500001 },
  { id: 2, id_ejecutivo: 2, id_cliente: 1, monto: 2500001 },
  { id: 3, id_ejecutivo: 3, id_cliente: 2, monto: 200 },
];

// Pregunta 2
const q2AccountsBiggerThan = q1AccountsArr.filter(
  ({ monto }) => monto > 2500000
);

// Pregunta 3
const q3SortedAccounts = [...q1AccountsArr].sort((a, b) => b.monto - a.monto);

// Pregunta 4
const q4ClientsArr = [
  { id: 1, rut: "20.300.800-5" },
  { id: 2, rut: "20.400.800-7" },
];

// Pregunta 5
const q5ClientsWithAccountBiggerThan = q2AccountsBiggerThan.map(
  ({ id_cliente }) => q4ClientsArr.find(({ id }) => id === id_cliente)
);

// Pregunta 6
const q6ClientsAccountsSumArr = (() => {
  // Optional, remove duplicates
  const clientsId = q5ClientsWithAccountBiggerThan.map(({ id }) => id);
  const uniqueClientsId = clientsId.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  const result = [];
  uniqueClientsId.forEach((id) => {
    const sum = q1AccountsArr.reduce(
      (accumulator, { id_cliente, monto }) =>
        id_cliente === id ? accumulator + monto : accumulator,
      0
    );
    result.push({ id_cliente: id, monto: sum });
  });
  return result;
})();

// Log answers
console.log("q1AccountsArr: ", q1AccountsArr);
console.log("q2AccountsBiggerThan: ", q2AccountsBiggerThan);
console.log("q3SortedAccounts: ", q3SortedAccounts);
console.log("q4ClientsArr: ", q4ClientsArr);
console.log("q5ClientsWithAccountBiggerThan: ", q5ClientsWithAccountBiggerThan);
console.log("q6ClientsAccountsSumArr: ", q6ClientsAccountsSumArr);
