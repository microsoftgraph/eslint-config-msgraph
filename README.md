# eslint-config-msgraph

This repository contains a shareable ESLint and Prettier configuration used by the Microsoft Graph Developer Experience team.

## Installation

To install the configuration, run the following command:

```bash
npm install --save-dev @microsoft/eslint-config-msgraph
```

In your project's eslint config file, add the following entry in your `extends` array:

```js
  extends: ['@microsoft/eslint-config-msgraph'],
```

To use the shared Prettier config, add a `prettier.config.cjs` file with the following contents:

```js
module.exports = {
  ...require('@microsoft/eslint-config-msgraph/prettier.config'),
  // add any overrides here
};
```

## Feedback and Requests

Please use [GitHub Issues](https://github.com/microsoftgraph/eslint-config-msgraph/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) for bug reports and feature requests. We highly recommend you browse existing issues before opening new issues.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.

## License

All files in this GitHub repository are subject to the [MIT license](https://github.com/microsoftgraph/eslint-config-msgraph/blob/main/LICENSE). This project also references fonts and icons from a CDN, which are subject to a separate [asset license](https://static2.sharepointonline.com/files/fabric/assets/license.txt).

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.