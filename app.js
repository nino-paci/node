const express = require ('express')
const app = express()

app.get('/',(req,res) => {
		res.send('Welcome to the homepage Baby')
})
app.listen(8000, () =>{
	console.log('Wazzzappppppppp')
})
