export interface Usuario {
  name: string;
  pass: string;
  notas: Nota[];
}

export interface Nota {
  titulo: string;
  detalhamento: string;
}
