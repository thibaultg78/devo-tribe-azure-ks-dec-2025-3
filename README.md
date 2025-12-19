# Knowledge Sharing (KS) session - Devoteam

- Devoteam M Cloud
- Tribe Azure
- Friday, 19th December 2025

# How you can try by yourself ⬇️

Below are the commands I used for the demo.

1. Build de votre image Docker
```
docker build -t devo-tribe-azure-ks-dec-2025 .
```
2. Starting the container
```
docker run -d -p 3000:3000 --name devo-tribe-azure-ks-dec-2025 devo-tribe-azure-ks-dec-2025
```
3. Creating your Azure Container Registry

```
$RG_NAME="RG-Thibault"
$LOCATION="francecentral"
$ACR_NAME="acrdevoteamdemo"

az acr create --resource-group $RG_NAME --name $ACR_NAME --sku Basic
```

4. Creating a service principal

```
$ACR_NAME="acrdevoteamdemo"
$RG_NAME="RG-Thibault"

# Récupérer l'ID de ta subscription
$SUBSCRIPTION_ID="nn-nn-nn-nn-nnn"

# Créer le Service Principal avec les droits sur le RG
az ad sp create-for-rbac --name "sp-github-actions-demo-dec-2025" --role contributor --scopes /subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RG_NAME
```

5. Adding your GitHub Secrets

<img width="802" height="311" alt="image" src="https://github.com/user-attachments/assets/7d804d02-bd70-4122-806a-c8598ae7fd40" />

7. Creating your workflow (for GitHub Actions)

https://github.com/thibaultg78/devo-tribe-azure-ks-dec-2025/blob/main/.github/workflows/deploy.yml

7. Once you've updated your website, restart the container if needed

```
az container restart --name devo-tribe-azure-ks-dec-2025-3 --resource-group RG-Thibault
```

# Contact

thibault.gibard@devoteam.com
