<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} - @yield('title')</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    {{-- <link rel="dns-prefetch" href="//fonts.gstatic.com"> --}}
    {{-- <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"> --}}

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    @yield('header')
</head>

<body>
    <div id="app">
        @guest
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
            </div>
        </nav>

        <main class="vertical-center">
            @yield('content')
        </main>
        @endguest

        @auth
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
                {{ config('app.name', 'Laravel') }}
            </a>

            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
                data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">

            {{-- <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    <a class="nav-link" href="{{ route('logout') }}">
            {{ __('Logout') }}
            </a>
            </li>
            </ul> --}}

            <div class="dropdown">
                <a class="btn text-light dropdown-toggle" href="#" role="button" id="dropdownLogout"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{ Auth::user()->name }}
                </a>

                <div class="dropdown-menu  dropdown-menu-right" aria-labelledby="dropdownLogout">
                    <a class="dropdown-item" href="{{ route('logout') }}">
                        {{ __('Logout') }}
                    </a>
                </div>
            </div>
        </nav>

        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-2">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link {{ Request::is('home*') ? 'active' : ''}}" href="{{ url('home') }}">
                                    <span data-feather="bar-chart-2"></span>
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{ Request::is('product*') ? 'active' : ''}}"
                                    href="{{ url('product') }}">
                                    <span data-feather="shopping-cart"></span>
                                    Products
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{ Request::is('formula*') ? 'active' : ''}}"
                                    href="{{ url('formula') }}">
                                    <span data-feather="file"></span>
                                    Formulas
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{ Request::is('user*') ? 'active' : ''}}" href="
                                {{ url('user') }}">
                                    <span data-feather="users"></span>
                                    Users
                                </a>
                            </li>
                        </ul>

                        <h6
                            class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Others</span>
                            <a class="link-secondary" href="#" aria-label="Add a new report">
                                <span data-feather="plus-circle"></span>
                            </a>
                        </h6>
                        <ul class="nav flex-column mb-2">
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url('profile') }}">
                                    <span data-feather="file-text"></span>
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    @yield('content')
                </main>
            </div>
        </div>
        @endauth
    </div>

    @yield('footer')
</body>

</html>
