import {ApiReferenceReact} from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'
import {Env} from "./EnvironmentVariables.js";

function App() {
  return (
    <ApiReferenceReact
      configuration={{
        title: "Uwubank",
        favicon: "/favicon.svg",
        darkMode: true,
        hideClientButton: true,
        hideDownloadButton: true,
        hiddenClients: [
          "libcurl", "clj_http", "restsharp", "asynchttp", "unirest", "jquery", "xhr", "fetch", "ofetch", "undici", "http", "nsurlsession",
          "cohttp", "restmethod", "webrequest", "httr", "wget", "httpie", "requests", "native", "curl", "guzzle", "python3", "", ""
        ],
        sources: [{
          title: "User Service",
          url: './user.openapi.yaml',
          servers: [
            {
              url: Env.USER_SERVICE_BASE_URL,
              description: "Rubijev Server"
            }
          ],
          default: true
        },
          {
            title: "Exchange Service",
            url: './exchange.openapi.yaml',
            servers: [
              {
                url: Env.EXCHANGE_SERVICE_BASE_URL,
                description: "Rubijev Server"
              }
            ],
          }
        ],
      }}
    />
  )
}

export default App
