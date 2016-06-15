if RUBY_VERSION > "1.9"
    Encoding.default_external = Encoding::UTF_8
    Encoding.default_internal = Encoding::UTF_8
end

add_import_path "app/components/"
add_import_path "public/vendor/bower_components/"

css_dir = "www/assets/css/"
sass_dir = "public/scss/"
fonts_dir = "www/assets/fonts/"
sprite_load_path = "public/images/sprites/"
images_dir = "www/assets/images/"

relative_assets = true

# -----------------------------------------
# Compass callbacks for growl - gem install growl if you want to see these
# -----------------------------------------

begin
    require 'growl'
    rescue LoadError
end

on_stylesheet_saved do |filename|
  if defined?Growl
    Growl.notify_ok "#{File.basename(filename)} updated!"
  end
end

on_stylesheet_error do |filename, message|
  if defined?Growl
    Growl.notify_error "#{File.basename(filename)}: #{message}", :sticky => false
  end
end