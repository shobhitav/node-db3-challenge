 const db=require('../data/db-config.js');
 
 module.exports={
    find,
     findById,
    findSteps,
     add,
    remove,
    update
}
// GET
function find(){
    return db('schemes');
}

//GET BY ID
function findById(id){
    return db('schemes').
    where({id})
}


// GET STEPS BY SCHEME_ID
function findSteps(scheme_id){
    return db('schemes')
    .join('steps','schemes.id','steps.scheme_id')
    .select('schemes.scheme_name','steps.step_number','steps.instructions')
    .where({scheme_id})
   }

//    -------------------- Another way  ----------------------
//    function findSteps(id){
//     return db('schemes')
//     .innerJoin('steps','schemes.id','steps.scheme_id')
//     .where({scheme_id:id})
//     .select('schemes.scheme_name','steps.step_number','steps.instructions')
  
//    }

// POST
function add(scheme){
    return db('schemes').insert(scheme);
}
// DELETE
function remove(id){
    return  db('schemes').where({ id }).del();
}



// UPDATE


// the update method needs to be "async" for the same reason
// as "add" above... we want to call update(), but we don't
// want to return the data that update() returns... instead,
// we want to use update()'s return value in a call to findById(),
// so we can return the updated user object (not the id of the 
// record that was updated.) To do this, we can't "return" update(),
// ... if we call update() without returning it, and without "await", 
// it will return a promise object (not a record id, like it normally does).
// And to be able to use "await", the enclosing function must be declared
// as "asynchronous" - this ensures that the JavaScript engine will
// wrap return values in a Promise object if needed, so it always
// returns a promise.
async function update(changes,id){
    return await db('schemes').where({ id }).update(changes);
} 
// Even though update also works without async and await:(