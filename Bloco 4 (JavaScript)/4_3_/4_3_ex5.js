let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "sim",
}
for (let i in info2) {
    for (let i in info) {
      console.log(i);
    }
    
    for (const i in info2) {
      console.log(info2[i]);
    for (const i in info) {
      console.log(info[i]);
    }