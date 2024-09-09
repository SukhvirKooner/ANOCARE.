module anocare_addr::anocare {

    struct anocare has key {
    tasks: Table<u64, Task>,
    set_task_event: event::EventHandle<Task>,
    task_counter: u64
  }
 
struct Task has store, drop, copy {
    task_id: u64,
    address:address,
    content: String,
    completed: bool,
  }
 use aptos_framework::event;
use std::string::String;
use aptos_std::table::Table;
}

public entry fun anocare(account: &signer){
  let tasks_holder = anocare {
    tasks: table::new(),
    set_task_event: account::new_event_handle<Task>(account),
    task_counter: 0
  };
  move_to(account, tasks_holder);
}
public entry fun create_task(account: &signer, content: String) acquires anocare {
    // gets the signer address
    let signer_address = signer::address_of(account);
    // gets the anocare resource
    let anocare = borrow_global_mut<anocare>(signer_address);
    // increment task counter
    let counter = anocare.task_counter + 1;
    // creates a new Task
    let new_task = Task {
      task_id: counter,
      address: signer_address,
      content,
      completed: false
    };
    // adds the new task into the tasks table
    table::upsert(&mut anocare.tasks, counter, new_task);
    // sets the task counter to be the incremented counter
    anocare.task_counter = counter;
    // fires a new task created event
    event::emit_event<Task>(
      &mut borrow_global_mut<anocare(signer_address).set_task_event,
      new_task,
    );
  }