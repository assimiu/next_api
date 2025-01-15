export default function Relogio() {
    const hora = new Date();
    return (
        <div>{hora.getDate()}, {hora.getFullYear()} {hora.getMonth()}</div>
    )
}