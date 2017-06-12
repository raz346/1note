class Note < ActiveRecord::Base
  include ActionView::Helpers::DateHelper
  include PgSearch
  multisearchable against: [:title, :body]




end
