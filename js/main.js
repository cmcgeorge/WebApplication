//-----------------------------------------------------------------------------
// constants

    //-------------------------------------------------------------------------
    /** the style for hidden displays */
    const DISPLAY_HIDDEN = "none";
    //-------------------------------------------------------------------------
    /** the style for visible displays */
    const DISPLAY_VISIBLE = "block";
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    /** the ID of the first-address element */
    const ELEMENT_ID_FIRST_ADDRESS = "firstAddress";
    //-------------------------------------------------------------------------
    /** the ID of the first-address-note element */
    const ELEMENT_ID_FIRST_ADDRESS_NOTE = "firstAddressNote";
    //-------------------------------------------------------------------------
    /** the ID of the result-distance element */
    const ELEMENT_ID_RESULT_DISTANCE = "resultDistance";
    //-------------------------------------------------------------------------
    /** the ID of the result-time element */
    const ELEMENT_ID_RESULT_TIME = "resultTime";
    //-------------------------------------------------------------------------
    /** the ID of the second-address element */
    const ELEMENT_ID_SECOND_ADDRESS = "secondAddress";
    //-------------------------------------------------------------------------
    /** the ID of the second-address-note element */
    const ELEMENT_ID_SECOND_ADDRESS_NOTE = "secondAddressNote";
    //-------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// public methods

    //-------------------------------------------------------------------------
    function displayDistanceAndTime() {

        let firstAddress            = document.getElementById(ELEMENT_ID_FIRST_ADDRESS).value;
        let firstAddressValid       = false;
        let firstAddressNoteLabel   = document.getElementById(ELEMENT_ID_FIRST_ADDRESS_NOTE);
        let resultDistanceLabel     = document.getElementById(ELEMENT_ID_RESULT_DISTANCE);
        let resultTimeLabel         = document.getElementById(ELEMENT_ID_RESULT_TIME);
        let secondAddress           = document.getElementById(ELEMENT_ID_SECOND_ADDRESS).value;
        let secondAddressValid      = false;
        let secondAddressNoteLabel  = document.getElementById(ELEMENT_ID_SECOND_ADDRESS_NOTE);
        let url                     = ( "http://localhost:"               +
                                        window.location.port              +
                                        "/api/Me?"                        +
                                        "origin="                         +
                                        encodeURIComponent(firstAddress)  +
                                        "&destination="                   +
                                        encodeURIComponent(secondAddress) );

        // check the first address
        firstAddressNoteLabel.style.display = DISPLAY_HIDDEN;
        if (firstAddress.length == 0) {

            firstAddressNoteLabel.style.display = DISPLAY_VISIBLE;

        } else {

            firstAddressValid = true;

        }

        // check the second address
        secondAddressNoteLabel.style.display = DISPLAY_HIDDEN;
        if (secondAddress.length == 0) {

            secondAddressNoteLabel.style.display = DISPLAY_VISIBLE;

        } else {

            secondAddressValid = true;

        }

        // display the distance and time
        resultDistanceLabel.style.display = DISPLAY_HIDDEN;
        resultTimeLabel.style.display     = DISPLAY_HIDDEN;
        if ( firstAddressValid &&
             secondAddressValid ) {

            let viewModel = JSON.parse( _httpGet(url) );

            resultDistanceLabel.innerText     = ("Distance: " + viewModel.distance);
            resultDistanceLabel.style.display = DISPLAY_VISIBLE;
            resultTimeLabel.innerText         = ("Time: " + viewModel.time);
            resultTimeLabel.style.display     = DISPLAY_VISIBLE;

        }

    }
    //-------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// private methods

    //-------------------------------------------------------------------------
    function _httpGet(url) {

        let xmlHttp = new XMLHttpRequest();

        xmlHttp.open( "GET" ,
                      url   ,
                      false );
        xmlHttp.send(null);

        return xmlHttp.responseText;

    }
    //-------------------------------------------------------------------------
