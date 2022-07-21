import React from 'react'
import { withSSRContext } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import { GetServerSideProps } from 'next'

function Admin({ users }: any) {
  return (
    <div className="mx-8 my-8 flex  flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border">
              <thead className="border-b bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-white"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-white"
                  >
                    Is active?
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-white"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-white"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-white"
                  >
                    Collections
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: any) => {
                  return (
                    <tr key={user.username} className="border-b bg-white">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {user.username}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        <input
                          className="form-check-input float-left mt-1 mr-2 h-4 w-4 appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                          type="checkbox"
                          value=""
                          id="flexCheckDisabled"
                          checked={user.is_active}
                          disabled
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        {user.is_admin ? 'Admin' : 'User'}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        {user.wallet_address}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        <a
                          href={`/admin/users/${user.username}`}
                          className="mb-4 text-blue-600 transition duration-300 ease-in-out hover:text-blue-700"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { API } = withSSRContext(context)
  let users
  try {
    users = await API.get('mobo', `/users`)
  } catch (e) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    }
  }

  return {
    props: {
      users: users?.result,
    },
  }
}
export default Admin
