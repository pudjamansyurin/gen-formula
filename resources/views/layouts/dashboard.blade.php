<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} - @yield('title')</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @stack('styles')
</head>

<body>
    <div id="app">
        <b-navbar toggleable="sm" type="dark" variant="dark" sticky>
            <b-navbar-brand href="#">
                <b-icon icon="x-diamond"></b-icon> {{ config('app.name', 'Laravel') }}
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="{{ url('home') }}" :active="@json(Request::is('home*'))">
                        Home
                    </b-nav-item>
                    <b-nav-item href="{{ url('product') }}" :active="@json(Request::is('product*'))">
                        Products
                    </b-nav-item>
                    <b-nav-item href="{{ url('formula') }}" :active="@json(Request::is('formula*'))">
                        Formula
                    </b-nav-item>
                    <b-nav-item href="{{ url('user') }}" :active="@json(Request::is('user*'))">
                        User
                    </b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    {{-- <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form> --}}

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>{{ Auth::user()->name }}</em>
                        </template>

                        <b-dropdown-item href="#">
                            <b-icon icon="person-circle"></b-icon> Profile
                        </b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="{{ route('logout') }}">
                            <b-icon icon="power"></b-icon> {{ __('Logout') }}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <b-container fluid>
            <b-row align-h="center">
                <b-col lg="10" md="9" class="mt-lg-3 mt-md-3 py-3 border">
                    @yield('content')
                </b-col>
            </b-row>
        </b-container>
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    @stack('scripts')
</body>

</html>
