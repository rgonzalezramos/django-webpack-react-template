from django.shortcuts import render

def app(request):
    return render(request, 'app.html')