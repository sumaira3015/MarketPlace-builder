export default {
    title:"Our Product",
    name:"ourProduct",
    type:"object",
    fields:[
        {
            name:"productsCardSection",
            title:"Products Card Section",
            type:"array",
            of:[
              {
                type:"object",
                fields:[
                    {
                        title:"Card Image",
                        name:"cardImage",
                        type:"image",
                    },
                    {
                        title:"Card Heading",
                        name:"cardHeading",
                        type:"string",
                    },
                    {
                        title:"Card Price",
                        name:"cardPrice",
                        type:"number",
                    }
                ]
              }

            ]
        }
    ]
} 
