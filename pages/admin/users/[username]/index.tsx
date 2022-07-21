import React from 'react'
import { withSSRContext } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import { GetServerSideProps } from 'next'

function User({ collections }: any) {
  return (
    <div className="mx-8 my-8 flex flex-col">
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
                    Collection name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-white"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-white"
                  >
                    Created at
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-white"
                  >
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {collections.map((collection: any) => {
                  return (
                    <tr key={collection.username} className="border-b bg-white">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {collection.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        {collection.type}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        {collection.createdAt}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        <a
                          href={collection.link}
                          target="_blank"
                          rel="noreferrer"
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
  const { username } = context.query
  let collections
  try {
    collections = await API.get(
      'mobo',
      `/public/collections?username=${username}`
    )
  } catch (e) {
    console.log('eee', e)
  }

  return {
    props: {
      collections: collections?.result,
    },
  }
}
export default User
