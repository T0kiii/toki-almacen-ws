import { Request } from "express"

type Casa = {
  idCasa?: string,
  nombreCasa: string,
  descCasa?: string,
}

type getCasaOuputType = {
  casa?: Casa,
  respuesta: Respuesta
}

interface CasaRequest extends Request {
  nombreCasa: string,
  descCasa: string
}
