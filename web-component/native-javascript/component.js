class UserCard extends HTMLElement {

    constructor() {
        // If you define a constructor, always call super() first as it is required by the CE spec.
        super();
    }

    render(data) {
        // Fill the respective areas of the card using DOM manipulation APIs
        // All of our components elements reside under shadow dom. So we created a this.shadowRoot property
        // We use this property to call selectors so that the DOM is searched only under this subtree
        this.shadowRoot.querySelector('.card__full-name').innerHTML = data.resultSets[0].name;
        this.shadowRoot.querySelector('.card__user-name').innerHTML = "League: " + data.parameters.LeagueID;
        this.shadowRoot.querySelector('.card__content').innerHTML = data.resultSets[0].rowSet.slice(0, 5).toString();
    }

    connectedCallback() {

        const currentDocument = document.currentScript.ownerDocument;

        const shadowRoot = this.attachShadow({mode: 'open'});

        // Select the template and clone it. Finally attach the cloned node to the shadowDOM's root.
        // Current document needs to be defined to get DOM access to imported HTML
        const template = currentDocument.querySelector('#user-card-template');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        // Extract the attribute user-id from our element.
        // Note that we are going to specify our cards like:
        // <user-card user-id="1"></user-card>
        const userId = this.getAttribute('user-id');

        // Fetch the data for that user Id from the API and call the render method with this data
        fetch(`https://stats.nba.com/stats/drafthistory?LeagueID=00`)
            .then((response) => response.text())
            .then((responseText) => {
                this.render(JSON.parse(responseText));
            })
            .catch((error) => {
                console.error(error);
            });
    }

}

customElements.define('native-web-component', UserCard);
