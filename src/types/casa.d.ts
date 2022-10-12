import { Request } from "express"

type Casa = {
  nombreCasa: string,
  descCasa?: string,
}

interface CasaRequest extends Request {
  nombreCasa: string,
  descCasa: string
}

type CasaResponse = {
  exito: boolean,
  mensaje?: string
}
