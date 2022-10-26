export type AlertPayload = {
  type: string,
  message: string
}

export type IAlert = {
  show(Object:AlertPayload): void,
  hide(): void
}
