export interface IUniqValidator {
    email(): boolean;
    cpf(): boolean;
    cnpj(): boolean;
    uuid(): boolean;
    isJson(): boolean;
    isJwt(): boolean;
    http(): boolean;
    ipv4(): boolean;
    ipv6(): boolean;
    allUniq(): boolean;
}
declare const _default: {
    email: (string: string) => boolean;
    cpf: (string: string) => boolean;
    cnpj: (string: string) => boolean;
    uuid: (string: string) => boolean;
    isJson: (string: string) => boolean;
    isJwt: (string: string) => boolean;
    http: (string: string) => boolean;
    ipv4: (string: string) => boolean;
    ipv6: (string: string) => boolean;
    allUniq: (string: any[]) => boolean;
};
export default _default;
