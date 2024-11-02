import { ElementPlugin, PluginContext } from "@puzzlet/templatedx";
import { Node } from 'mdast';

export class ExtractTextPlugin extends ElementPlugin {

  async transform(
    _props: Record<string, any>,
    children: Node[],
    pluginContext: PluginContext
  ): Promise<Node[] | Node> {
    const { scope, elementName, createNodeTransformer, nodeHelpers } = pluginContext;

    if (!elementName) {
      throw new Error('elementName must be provided in pluginContext');
    }

    const childScope = scope.createChild();
    const transformer = createNodeTransformer(childScope);
    const processedChildren = await Promise.all(
      children.map(async (child) => {
        const result = await transformer.transformNode(child);
        return Array.isArray(result) ? result : [result];
      })
    );
    const flattenedChildren = processedChildren.flat();
    const extractedText = nodeHelpers.toMarkdown({
      type: 'root',
      children: flattenedChildren
    });
    let collectedData = scope.getShared('extractedText');
    if (!collectedData) {
      collectedData = [];
      scope.setShared('extractedText', collectedData);
    }
    collectedData.push({
      name: elementName,
      content: extractedText.trim(),
    });
    return [];
  }
}