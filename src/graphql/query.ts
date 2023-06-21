import { gql } from "@apollo/client";

export const ME_QUERY = gql`
  query Me {
    me {
      id
      username
      fullname
      email
      phone_number
      role {
        name
        permissions {
          read
          write
          update
          remove
        }
      }
    }
  }
`;
