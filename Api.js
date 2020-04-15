import config from "./config";
import { useState, useContext} from "react";
import { AsyncStorage } from "react-native";
import { dispatchContext } from "./contexts";




export default function GetFetchAPI() {

    const address = config.getCell("StoreAddress");
    const [error, setError] = useState(false);
    const dispatch = useContext(dispatchContext);
    

    return fetch(`${address}graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
                {
                    productCategories(where: {hideEmpty: true}) {
                        nodes {
                          name
                          productCategoryId
                          image {
                            mediaDetails {
                              file
                            }
                          }
                        }
                      }
                }
            `,
        }),
    })

}

