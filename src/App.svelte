<script lang="ts">
  import Router from "svelte-spa-router";
  
  import Profile from "./pages/profile.svelte"
  import Background from "./pages/background.svelte"
  import Warning from "./pages/warning.svelte";
  import Duungjang from "./pages/duungjang.svelte";
  import Siluat from "./pages/siluat.svelte";
  import ThothThemOening from "./pages/thoththemeopening.svelte";
  import Thoththeme from "./pages/thoththeme.svelte";
    import Ammjun from "./pages/subs/ammjun.svelte";
    import Ww1stw from "./pages/subs/ww1stw.svelte";
    import Ww2stw from "./pages/subs/ww2stw.svelte";
    import Ww3stw from "./pages/subs/ww3stw.svelte";
    import Monitor from "./pages/desktop/monitor.svelte";
    import Sion from "./pages/desktop/sion.svelte";
    import Plan from "./pages/desktop/plan.svelte";
    import Unnyoung from "./pages/desktop/unnyoung.svelte";
    import Home from "./pages/home.svelte";
    import Index from "./pages/index.svelte";
    import End from "./pages/end.svelte";

  const routes = {
    '/': Home,
    '/index': Index,
    '/profile': Profile,
    '/background': Background,
    '/warning': Warning,
    '/duungjang': Duungjang,
    '/siluat': Siluat,
    '/tto': ThothThemOening,
    '/tt': Thoththeme,
    '/s/ammjun': Ammjun,
    '/s/1stw': Ww1stw,
    '/s/2stw': Ww2stw,
    '/s/3stw': Ww3stw,
    '/monitor': Monitor,
    '/sion': Sion,
    '/plan': Plan,
    '/unnyoung': Unnyoung,
    '/end': End
  }
</script>

<Router routes={routes} />
