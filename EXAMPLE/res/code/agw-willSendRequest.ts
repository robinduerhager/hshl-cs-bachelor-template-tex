class AuthenticatedDataSource extends RemoteGraphQLDataSource {

  // Diese Methode wird für jede Anfrage über das Apollo Gateway aufgerufen
  async willSendRequest({ request, context }) {
    
    // "token" ist ein vom Apollo Server weitergeleiteter Wert
    // Dieser kann ein String oder null sein
    // "auth" ist eine Firebase Authentication Instanz
    const { token, auth }: Context = context

    // Beim ersten Poll des GraphQL-Schemas wird diese Funktion ausgeführt
    // der Token ist dann null, da die Anfrage vom Apollo Gateway kam
    if (!token) return

    // Falls ein Token vom Apollo Server gesetzt wurde, der nicht null ist
    // versuche den Token über Firebase in eine ID zu konvertieren
    // Falls dies nicht funktioniert, führe den catch block aus.
    const result = await auth
      .verifyIdToken(token)
      .catch(err => console.error(err))

    if (!result) throw new Error('Artist is not Authorized')

    // Speicher den konvertierten Token in den "authorization" header
    // Für den Fall, dass es Queries gibt, die keinen Authorisierten Nutzer brauchen:
    // Speicher ebenfalls die "artistid" ab, falls diese extrahiert werden konnte
    request.http.headers.append('authorization', token)
    request.http.headers.append('artistid', result.uid)

    return
  }
}
