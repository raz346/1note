class Api::NotebooksController < ApplicationController
  before_action :require_signed_in

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author_id = current_user.id
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find(params[:id])
    unless lastNotebook? || @notebook.author_id != current_user.id
      @notebook.destroy!
      render :show
    else
      render json: {}, status: 403
    end
  end

  def index
    @notebooks = current_user.notebooks
  end

  def show
    @notebook = Notebook.find(params[:id])
  end

  def update
    @notebook = Notebook.find(params[:id])

    if @notebook.update(notebook_params) && @notebook.author_id == current_user.id
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  private

  def lastNotebook?
    current_user.notebooks.length == 1
  end

  def notebook_params
    params.require(:notebook).permit(:title)
  end
end
