describe('Zenith Bank - Individual Current Account Features', () => {
    it('Validates features, requirements, and available channels of the Individual Current Account', () => {
      // Visit the Zenith Bank homepage
      cy.visit('https://www.zenithbank.com/');
  
      cy.get('body').then((body) => {
        if (body.find('#continue-button').length > 0) { 
          // If popup exists, interact with it.
          cy.get('#continue-button').click(); 
        }
      }).then(() => {
        // Select “Personal” from the left top menu
        cy.get('.mobile-menu-link').click();
        cy.get('#menu-main-menu > .menu-item-1162 > [href="/personal-banking/"] > .menu-item-text').click();
    
        // Select “Bank Accounts”
        cy.get('[style="display: block;"] > .menu-item-1154 > [href="/personal-banking/bank-accounts/"]').click();
        
        // Select “Current Accounts”
        cy.get('.menu-item-1640 > a').click(); 

         // Scroll down a bit
    cy.scrollTo(0, 1000); // Scrolls the window 1000 pixels down

    // Wait for a short period
    cy.wait(2000); // Waits for 2seconds


    
        // Validate features of the “Individual Current Account”
        cy.get('body > div:nth-child(5) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h4:nth-child(1) > a:nth-child(2)').click();
        //Verify that 'zero account opening balance" is contained under the features using its own href
        cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(1)')
          .should('exist') // Validates the element exists
          .and('contain', 'Zero account opening balance'); 

          //internet banking
          cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(2)')
            .should('exist')
            .and('contain', 'Internet Banking')
      
            //Zenith Mobile Banking app
            cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(3)')
            .should('exist')
            .and('contain', 'Zenith Mobile Banking app')


            //#966 Eazy banking
            cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(4)')
            .should('exist')
            .and('contain', '*966# Eazybanking')

            //MasterCard/Visa/Verve debit card
            cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(5)')
            .should('exist')
            .and('contain', 'MasterCard/Visa/Verve debit card')

            //Email/SMS Alertz
            cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(6)')
            .should('exist')
            .and('contain', 'Email/SMS Alertz')

            //Cheque book
            cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(7)')
            .should('exist')
            .and('contain', 'Cheque book')
            
             // Scroll down a bit
    cy.scrollTo(0, 100); 

    // Wait for a short period
    cy.wait(2000); // Waits for 2seconds

        // Validate requirements of the “Individual Current Account”
        cy.get('body > div:nth-child(5) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(2)').click();

        const requirements = [
            "Account opening form duly completed",
            "One recent clear passport photograph of signatory",
            "Identification of signatories",
            "Residence permit",
            "Two",
            "Public Utility Receipt dated within the last three months (PHCN bill, water rate bill, tenement rate, rent"
          ];
    
          //validate requirements dynamically here instead of manually
          
            requirements.forEach((expectedText, index) => {
                cy.get(`#ui-id-4 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(${index + 1})`)
                  .invoke('text')
                  .then((text) => {
                    expect(text).to.include(expectedText);
                  });
          })
        // Validate available channels of the “Individual Current Account”
        cy.get('body > div:nth-child(5) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > h4:nth-child(1) > a:nth-child(2)').click();
          
        const channels = [
            "*966# EazyBanking",
            "Zenith Internet Banking",
            "In-branch at any Zenith Bank branch",
            "ZenithDirect – our 24/7 telephone banking",
            "Zenith Bank ATM nation-wide – free cash withdrawal",
            "Zenith Mobile Banking App – 24/7 on your smart phone",
            "Access your account using your Zenith Bank debit card at participating merchant stores for payment of goods and services in Nigeria and anywhere in the world"
          ];
          channels.forEach((availableChannels, index) => {
            cy.get(`#ui-id-12 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(${index + 1})`)
              .invoke('text')
              .then((text) => {
                expect(text).to.include(availableChannels);
              });
          });
        })          
    });
  });
  