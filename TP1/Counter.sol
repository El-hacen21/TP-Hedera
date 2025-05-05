// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint public count = 0;  // Variable d'état avec getter automatique

    // Fonction pour incrémenter le compteur
    function increment() public  {
        count += 1;
    }

    // Fonction pour décrémenter (facultatif)
    function decrement() public {
        require(count > 0, "Le compteur est deja a zero.");
        count -= 1;
    }

    // Fonction de lecture (optionnelle car count est public)
    function getCount() public view returns (uint) {
        return count;
    }
}
