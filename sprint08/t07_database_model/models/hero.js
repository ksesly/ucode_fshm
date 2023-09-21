const Model = require('../model');

class Hero extends Model {
    constructor(table_name = 'heroes', name, description, class_role, race_id = 'human') {
		super(table_name, { name, description, class_role, race_id });
    }
    find(id) {
        return super.find(id);
    }
    delete(id) {
        return super.delete(id);
    }
    save() {
        return super.save();
    }
}
module.exports = Hero;

// const ks = new Hero('heroes','Ksushka pushka', 'push', 'tankman', null);

// console.log('Testing find method for Hero...');
// ks.find(11)
//     .then((result) => {
//         console.log('Found result:', result);
//     })
//     .catch((error) => {
//         console.error('Find failed:', error);
//     });

// console.log('Testing save method for Hero...');
// ks.save()
//   .then((result) => {
//     console.log('Save result:', result);
//   })
//   .catch((error) => {
//     console.error('Save failed:', error);
//   });

// console.log('Testing delete method for Hero...');
// ks.delete(11)
//   .then(() => {
//     console.log('Delete successful');
//   })
//   .catch((error) => {
//     console.error('Delete failed:', error);
//   });
