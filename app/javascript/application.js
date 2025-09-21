// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

import "trix";
import "@rails/actiontext";

// Enable Active Storage direct uploads used by Action Text attachments
import * as ActiveStorage from "@rails/activestorage";
ActiveStorage.start();
