// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bGRPhgjN4EpLyGua5e921e
// Component: TP56wp8NVJSl

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";

import { useScreenVariants as useScreenVariantsunIj0ASl86D7 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: UNIj0aSl86d7/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: bGRPhgjN4EpLyGua5e921e/projectcss
import sty from "./PlasmicNav.module.css"; // plasmic-import: TP56wp8NVJSl/css

import BrandIcon from "./icons/PlasmicIcon__Brand"; // plasmic-import: 3ICXQJTFQC63/icon

createPlasmicElementProxy;

export type PlasmicNav__VariantMembers = {};
export type PlasmicNav__VariantsArgs = {};
type VariantPropType = keyof PlasmicNav__VariantsArgs;
export const PlasmicNav__VariantProps = new Array<VariantPropType>();

export type PlasmicNav__ArgsType = {};
type ArgPropType = keyof PlasmicNav__ArgsType;
export const PlasmicNav__ArgProps = new Array<ArgPropType>();

export type PlasmicNav__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  svg?: Flex__<"svg">;
  navButtoons2?: Flex__<"div">;
  component3?: Flex__<"div">;
  signUp2?: Flex__<"div">;
  component4?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultNavProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNav__RenderFunc(props: {
  variants: PlasmicNav__VariantsArgs;
  args: PlasmicNav__ArgsType;
  overrides: PlasmicNav__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsunIj0ASl86D7()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <NavigationBar
        data-plasmic-name={"navigationBar"}
        data-plasmic-override={overrides.navigationBar}
        brand={
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__oUs7S
            )}
            component={Link}
            href={"#"}
            platform={"nextjs"}
          >
            <BrandIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </PlasmicLink__>
        }
        className={classNames("__wab_instance", sty.navigationBar)}
        closeButton={
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__pjHpK)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={"https://static1.plasmic.app/close.svg"}
          />
        }
        forceOpenMenu={
          hasVariant(globalVariants, "screen", "tablet") ? true : false
        }
        itemsGap={32}
        menuItems={
          <React.Fragment>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___9DGtt
              )}
              component={Link}
              href={"/"}
              platform={"nextjs"}
            >
              {"Products"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__jt1Rn
              )}
              component={Link}
              href={"/"}
              platform={"nextjs"}
            >
              {"Pricing"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__brjAt
              )}
              component={Link}
              href={"/"}
              platform={"nextjs"}
            >
              {"Contact"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__nIKkd
              )}
              component={Link}
              href={"/"}
              platform={"nextjs"}
            >
              {"Usecases"}
            </PlasmicLink__>
            <Stack__
              as={"div"}
              data-plasmic-name={"navButtoons2"}
              data-plasmic-override={overrides.navButtoons2}
              hasGap={true}
              className={classNames(projectcss.all, sty.navButtoons2)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"component3"}
                data-plasmic-override={overrides.component3}
                hasGap={true}
                className={classNames(projectcss.all, sty.component3)}
              >
                <div
                  data-plasmic-name={"signUp2"}
                  data-plasmic-override={overrides.signUp2}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.signUp2
                  )}
                >
                  {"Login"}
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                data-plasmic-name={"component4"}
                data-plasmic-override={overrides.component4}
                hasGap={true}
                className={classNames(projectcss.all, sty.component4)}
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Sign Up"}
                </div>
              </Stack__>
            </Stack__>
          </React.Fragment>
        }
        openButton={
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__pmVl)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={"https://static1.plasmic.app/menu.svg"}
          />
        }
        responsiveBreakpoint={
          hasVariant(globalVariants, "screen", "tablet") ? 320 : 768
        }
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigationBar",
    "svg",
    "navButtoons2",
    "component3",
    "signUp2",
    "component4",
    "text"
  ],
  navigationBar: [
    "navigationBar",
    "svg",
    "navButtoons2",
    "component3",
    "signUp2",
    "component4",
    "text"
  ],
  svg: ["svg"],
  navButtoons2: ["navButtoons2", "component3", "signUp2", "component4", "text"],
  component3: ["component3", "signUp2"],
  signUp2: ["signUp2"],
  component4: ["component4", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  svg: "svg";
  navButtoons2: "div";
  component3: "div";
  signUp2: "div";
  component4: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNav__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNav__VariantsArgs;
    args?: PlasmicNav__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNav__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNav__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNav__ArgProps,
          internalVariantPropNames: PlasmicNav__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNav__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNav";
  } else {
    func.displayName = `PlasmicNav.${nodeName}`;
  }
  return func;
}

export const PlasmicNav = Object.assign(
  // Top-level PlasmicNav renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    svg: makeNodeComponent("svg"),
    navButtoons2: makeNodeComponent("navButtoons2"),
    component3: makeNodeComponent("component3"),
    signUp2: makeNodeComponent("signUp2"),
    component4: makeNodeComponent("component4"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicNav
    internalVariantProps: PlasmicNav__VariantProps,
    internalArgProps: PlasmicNav__ArgProps
  }
);

export default PlasmicNav;
/* prettier-ignore-end */
