export default interface Schedule {
    id: number;
    accountUnidadeId: number;
    profissionalId: number;
    profissionalNome: string;
    data: string;
    horaInicial: string;
    horaFinal: string;
    horaChegada: string;
    pacienteId: number;
    pacienteNome: string;
    pacienteNomeSocial: string;
    pacienteEmail: string;
    pacienteFoto: string;
    status: number;
    convenioId: number;
    convenioTitulo: string;
    convenioPlanoDescricao: string;
    servicoDescricao: string;
    salaId: number;
    salaDescricao: string;
    hashRecurso: string;
    prontuarioData: string;
    prontuarioDuracao: string;
    prontuarioEncerrado: number;
    acompanhanteNome: string;
}