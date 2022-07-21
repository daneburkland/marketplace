import React, { useEffect } from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import { withSSRContext } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import { useRouter } from 'next/router'

function Admin() {
  const router = useRouter()
  return (
    <Authenticator socialProviders={['google']}>
      {() => {
        router.push('/admin/users')
        return null
      }}
    </Authenticator>
  )
}

export default Admin
