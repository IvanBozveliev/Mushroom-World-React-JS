function process(error){
    // console.log(error)
   // return Object.values(error.errors).map(err => err.properties.message);
   return Object.values(error.errors).map(err => err.message);

}

module.exports = process;


// {{#if error}}
// <section class="notifications error">
//     <p>{{error}}</p>
// </section>
// {{/if}}