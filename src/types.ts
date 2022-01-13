export type TEIConfig = {
    sections: TEIConfigSection[];
    elements: TEIConfigElement[];
    attributes: TEIConfigAttribute[];
}

export type TEIConfigSection = TEIConfigSectionMetadata | TEIConfigSectionText;

export type TEIConfigSectionMetadata = {
    name: string;
    type: 'metadata';
};

export type TEIConfigSectionText = {
    name: string;
    type: 'text';
    parse: TEIConfigParse;
    serialise: TEIConfigSerialiseElement;
};

export type TEIConfigElement = {
    name: string;
    type?: string;
    parse: TEIConfigParse;
    serialise?: TEIConfigSerialiseElement;
    attrs?: string[];
};

export type TEIConfigAttribute = {
    name: string;
    parse: TEIConfigParse;
    serialise: TEIConfigSerialiseAttribute;
    default?: string;
}

export type TEIConfigParse = {
    rule: string | string[];
    text?: string;
    value?: string;
};

export type TEIConfigSerialiseElement = {
    element: string;
    text?: string;
    weight?: number;
};

export type TEIConfigSerialiseAttribute = {
    attribute: string;
    values?: {[key: string]: string};
    value?: string;
};

export type TEIDocument = {
    [key: string]: TEITextDocumentCollection | TEIMetadataNode;
}

export type TEITextDocumentCollection = {
    type: string;
    main: TEITextNode;
    nested?: {[typeKey: string]: {[docKey: string]: TEINestedTextDocument}};
}

export type TEINestedTextDocument = {
    id: string;
    type: string;
    doc: TEITextNode;
}

export type TEITextNode = {
    type: string;
    content: TEITextNode[];
    text: string | null;
    marks: TEITextMark[];
    attrs: {[key: string]: string};
    nested?: boolean;
};

export type TEITextMark = {
    type: string;
    attrs: {[key: string]: string};
};

export type TEIMetadataNode = {
    type?: string;
    tag: string;
    children: TEIMetadataNode[];
    text: string | null;
    attributes: {[key: string]: string};
};
