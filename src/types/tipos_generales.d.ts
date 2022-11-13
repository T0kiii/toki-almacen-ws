
type Respuesta = {
  exito: boolean,
  mensaje?: string
}

type ErrorKnex = {
  errno: number,
  code: string,
  syscall: string,
  address: string,
  port: number,
  fatal: boolean
}
