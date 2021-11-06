var rpc = require("discord-rpc")
// Original modifié par Le FoxTo pour le rendre complet.
// Plus d'informations : https://peopleofhell.fr/tuto/richvar 
rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,

activity : {
// 2ème ligne du RP (Minimum 2 caractères)
details : "Venez nous rejoindres !!",
// 3ème ligne du RP (Minimum 2 caractères)
state : "Clique dessous 🔽 !!  ",

assets : {
// Grande image avec texte non cliquable (minuscule seulement)
large_image : "fivem",
large_text : "PlataLife RP",
// Petite image avec texte non cliquable (minuscule seul_ement)
//small_image : "",
//small_text : "[A] Wanheda"

// Bouton(s) du RP : Maximum 2 - Minimum 0
// (Vous ne pouvez pas cliquer sur vos propres boutons)
},
buttons : [
// Bouton n'1 | (Ajouter des // devant pour les désactiver : "// {label : [...]" )
{label : "Discord" , url : "https://discord.gg/GuMBXRq4eN"},
// Bouton n'2 | (Ajouter des // devant pour les désactiver : "// {label : [...]" )
{label : "Site Web",url : "https://leoeliot15.wixsite.com/plataliferp"}
]
}
})
})

// ClientID à récupérer sur : https://discord.com/developers/applications/ (Applications ID)
// Le nom de votre application correspondra à la première ligne du RP (En gras)
client.login({ clientId : "880627563876192348" }).catch(console.error);

// -------------------------------
// Ma Chaîne YouTube : https://www.youtube.com/c/lefoxto
// Ma Chaine Twitch : https://www.twitch.tv/lefoxto
// Mon discord : FoxTo#5632
// Me contacter par mail : foxto@peopleofhell.fr
// Discord POH.Fr : https://peopleofhell.fr
// -------------------------------