## TP1 – Se familiariser avec l’environnement Hedera

Ce TP a pour objectif de vous initier au développement de contrats intelligents sur la blockchain Hedera en utilisant l’environnement Hardhat.


### Étapes à suivre:

1. Préparer l’environnement de développement
Installer Visual Studio Code (ou un autre éditeur de code de votre choix).

* Cloner le projet d’exemple officiel Hedera :

```bash
git clone https://github.com/hashgraph/hedera-hardhat-example-project
```

* Se rendre dans le dossier du projet :

```bash
cd hedera-hardhat-example-project
```

* Explorer rapidement la structure du projet :

   -  contracts/ : contient le contrat Greeter.sol.

   - test/ : contient les tests associés.

   - scripts/ : scripts pour déployer et interagir avec les contrats.

2. Installer les dépendances nodejs:

```bash
    npm install
```

3. Configurer l’environnement
Renommer le fichier .env.example en .env :

```bash
mv .env.example .env

```
* Créer un compte de test sur le portail Hedera: https://portal.hedera.com/dashboard

* Modifier la ligne ci-dessous du fichier .env en remplaçant par votre ``HEX Encoded Private Key``  générée sur le portail.

```bash
  TESTNET_OPERATOR_PRIVATE_KEY=0x8780adb0ffb2fa3da24d6df2ec6ff771203361a32e4771739fa6d20d17dfd8d4
```

* Ensuite dans ``hardhat.config.js`` remplacer ``local`` par ``testnet``

```bash
  defaultNetwork: "testnet",
```

4. Tester le contrat existant
Lancer les tests existants :

```bash
npx hardhat test
```

Vous devriez voir les tests passer avec succès.

5. Comprendre le contrat Greeter.sol
Lire et analyser le code du fichier contracts/Greeter.sol.

Vous y trouverez une classe, un constructeur, et des fonctions en langage Solidity.

* Consultez rapidement la documentation de Solidity: https://docs.soliditylang.org/fr/latest/structure-of-a-contract.html
Ou regardez des tutoriels sur YouTube pour une introduction rapide.

6. Déployer un contrat
Utiliser le script de déploiement :

```bash
npx hardhat deploy-contract
```

Le contrat sera déployé sur le réseau de test Hedera. Une adresse de déploiement et un bytecode compilé seront générés.



## Travail demandé: 

1. Écrire un nouveau contrat Counter.sol avec les fonctionnalités suivantes :

 * Une variable de type entier (uintX).

 * Une fonction pour incrémenter et décrémeter,et reset.

 * Une fonction (view) pour récupérer la valeur actuelle.


2. Créer un fichier de test pour Counter.sol en vous inspirant des tests de Greeter.sol. (ressource: https://hardhat.org/tutorial/testing-contracts)

Vérifier que tous les tests passent correctement :


## Conseils
Prenez le temps de bien comprendre le fonctionnement d’un contrat intelligent : construction, compilation, déploiement, interaction.

Utilisez les scripts présents dans le dossier scripts/ pour interagir avec les contrats.


