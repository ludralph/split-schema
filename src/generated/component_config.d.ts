import * as runtime from '@prisma/client/runtime/library';
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result
import { 
    AtLeast,
    Extends,
    Has,
    Or,
    GetScalarType, 
    SortOrder, 
    BatchPayload,
    FieldRef,
    False,
    Keys,
    ExcludeUnderscoreKeys,
    Subset, 
    SelectSubset,
    InputJsonValue,
    JsonNullValueInput,
    JsonFilter,
    StringFilter,
    IntFilter,
    StringFieldUpdateOperationsInput,
    IntFieldUpdateOperationsInput,
    JsonWithAggregatesFilter,
    StringWithAggregatesFilter,
    IntWithAggregatesFilter,
    JsonValue,
    PrismaPromise,
    PickEnumerable,
    TypeMap,
    SubsetIntersection,
    True,
    MaybeTupleToUnion,
    GetHavingFields,
    XOR,


 } from "./utils"

export type component_config = $Result.DefaultSelection<$component_configPayload>


/**
   * Model component_config
   */

export type AggregateComponent_config = {
    _count: Component_configCountAggregateOutputType | null
    _avg: Component_configAvgAggregateOutputType | null
    _sum: Component_configSumAggregateOutputType | null
    _min: Component_configMinAggregateOutputType | null
    _max: Component_configMaxAggregateOutputType | null
  }

  export type Component_configAvgAggregateOutputType = {
    id: number | null
  }

  export type Component_configSumAggregateOutputType = {
    id: number | null
  }

  export type Component_configMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Component_configMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Component_configCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Component_configAvgAggregateInputType = {
    id?: true
  }

  export type Component_configSumAggregateInputType = {
    id?: true
  }

  export type Component_configMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Component_configMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Component_configCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Component_configAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which component_config to aggregate.
     */
    where?: component_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of component_configs to fetch.
     */
    orderBy?: component_configOrderByWithRelationInput | component_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: component_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` component_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` component_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned component_configs
    **/
    _count?: true | Component_configCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Component_configAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Component_configSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Component_configMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Component_configMaxAggregateInputType
  }

  export type GetComponent_configAggregateType<T extends Component_configAggregateArgs> = {
        [P in keyof T & keyof AggregateComponent_config]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComponent_config[P]>
      : GetScalarType<T[P], AggregateComponent_config[P]>
  }




  export type component_configGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: component_configWhereInput
    orderBy?: component_configOrderByWithAggregationInput | component_configOrderByWithAggregationInput[]
    by: Component_configScalarFieldEnum[] | Component_configScalarFieldEnum
    having?: component_configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Component_configCountAggregateInputType | true
    _avg?: Component_configAvgAggregateInputType
    _sum?: Component_configSumAggregateInputType
    _min?: Component_configMinAggregateInputType
    _max?: Component_configMaxAggregateInputType
  }

  export type Component_configGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Component_configCountAggregateOutputType | null
    _avg: Component_configAvgAggregateOutputType | null
    _sum: Component_configSumAggregateOutputType | null
    _min: Component_configMinAggregateOutputType | null
    _max: Component_configMaxAggregateOutputType | null
  }

  type GetComponent_configGroupByPayload<T extends component_configGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Component_configGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Component_configGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Component_configGroupByOutputType[P]>
            : GetScalarType<T[P], Component_configGroupByOutputType[P]>
        }
      >
    >


  export type component_configSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["component_config"]>

  export type component_configSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $component_configPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "component_config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["component_config"]>
    composites: {}
  }


  type component_configGetPayload<S extends boolean | null | undefined | component_configDefaultArgs> = $Result.GetResult<$component_configPayload, S>

  type component_configCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<component_configFindManyArgs, 'select' | 'include'> & {
      select?: Component_configCountAggregateInputType | true
    }

  export interface component_configDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['component_config'], meta: { name: 'component_config' } }
    /**
     * Find zero or one Component_config that matches the filter.
     * @param {component_configFindUniqueArgs} args - Arguments to find a Component_config
     * @example
     * // Get one Component_config
     * const component_config = await prisma.component_config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends component_configFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, component_configFindUniqueArgs<ExtArgs>>
    ): Prisma__component_configClient<$Result.GetResult<$component_configPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Component_config that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {component_configFindUniqueOrThrowArgs} args - Arguments to find a Component_config
     * @example
     * // Get one Component_config
     * const component_config = await prisma.component_config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends component_configFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, component_configFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__component_configClient<$Result.GetResult<$component_configPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Component_config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {component_configFindFirstArgs} args - Arguments to find a Component_config
     * @example
     * // Get one Component_config
     * const component_config = await prisma.component_config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends component_configFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, component_configFindFirstArgs<ExtArgs>>
    ): Prisma__component_configClient<$Result.GetResult<$component_configPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Component_config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {component_configFindFirstOrThrowArgs} args - Arguments to find a Component_config
     * @example
     * // Get one Component_config
     * const component_config = await prisma.component_config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends component_configFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, component_configFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__component_configClient<$Result.GetResult<$component_configPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Component_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {component_configFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Component_configs
     * const component_configs = await prisma.component_config.findMany()
     * 
     * // Get first 10 Component_configs
     * const component_configs = await prisma.component_config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const component_configWithIdOnly = await prisma.component_config.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends component_configFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, component_configFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$component_configPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Component_config.
     * @param {component_configCreateArgs} args - Arguments to create a Component_config.
     * @example
     * // Create one Component_config
     * const Component_config = await prisma.component_config.create({
     *   data: {
     *     // ... data to create a Component_config
     *   }
     * })
     * 
    **/
    create<T extends component_configCreateArgs<ExtArgs>>(
      args: SelectSubset<T, component_configCreateArgs<ExtArgs>>
    ): Prisma__component_configClient<$Result.GetResult<$component_configPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Component_configs.
     *     @param {component_configCreateManyArgs} args - Arguments to create many Component_configs.
     *     @example
     *     // Create many Component_configs
     *     const component_config = await prisma.component_config.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends component_configCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, component_configCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Component_config.
     * @param {component_configDeleteArgs} args - Arguments to delete one Component_config.
     * @example
     * // Delete one Component_config
     * const Component_config = await prisma.component_config.delete({
     *   where: {
     *     // ... filter to delete one Component_config
     *   }
     * })
     * 
    **/
    delete<T extends component_configDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, component_configDeleteArgs<ExtArgs>>
    ): Prisma__component_configClient<$Result.GetResult<$component_configPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Component_config.
     * @param {component_configUpdateArgs} args - Arguments to update one Component_config.
     * @example
     * // Update one Component_config
     * const component_config = await prisma.component_config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends component_configUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, component_configUpdateArgs<ExtArgs>>
    ): Prisma__component_configClient<$Result.GetResult<$component_configPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Component_configs.
     * @param {component_configDeleteManyArgs} args - Arguments to filter Component_configs to delete.
     * @example
     * // Delete a few Component_configs
     * const { count } = await prisma.component_config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends component_configDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, component_configDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Component_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {component_configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Component_configs
     * const component_config = await prisma.component_config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends component_configUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, component_configUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Component_config.
     * @param {component_configUpsertArgs} args - Arguments to update or create a Component_config.
     * @example
     * // Update or create a Component_config
     * const component_config = await prisma.component_config.upsert({
     *   create: {
     *     // ... data to create a Component_config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Component_config we want to update
     *   }
     * })
    **/
    upsert<T extends component_configUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, component_configUpsertArgs<ExtArgs>>
    ): Prisma__component_configClient<$Result.GetResult<$component_configPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Component_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {component_configCountArgs} args - Arguments to filter Component_configs to count.
     * @example
     * // Count the number of Component_configs
     * const count = await prisma.component_config.count({
     *   where: {
     *     // ... the filter for the Component_configs we want to count
     *   }
     * })
    **/
    count<T extends component_configCountArgs>(
      args?: Subset<T, component_configCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Component_configCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Component_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Component_configAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Component_configAggregateArgs>(args: Subset<T, Component_configAggregateArgs>): PrismaPromise<GetComponent_configAggregateType<T>>

    /**
     * Group by Component_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {component_configGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends component_configGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: component_configGroupByArgs['orderBy'] }
        : { orderBy?: component_configGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, component_configGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComponent_configGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the component_config model
   */
  readonly fields: component_configFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for component_config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__component_configClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the component_config model
   */ 
  interface component_configFieldRefs {
    readonly id: FieldRef<"component_config", 'Int'>
    readonly domain: FieldRef<"component_config", 'String'>
    readonly props: FieldRef<"component_config", 'Json'>
    readonly groups: FieldRef<"component_config", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * component_config findUnique
   */
  export type component_configFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component_config
     */
    select?: component_configSelect<ExtArgs> | null
    /**
     * Filter, which component_config to fetch.
     */
    where: component_configWhereUniqueInput
  }


  /**
   * component_config findUniqueOrThrow
   */
  export type component_configFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component_config
     */
    select?: component_configSelect<ExtArgs> | null
    /**
     * Filter, which component_config to fetch.
     */
    where: component_configWhereUniqueInput
  }


  /**
   * component_config findFirst
   */
  export type component_configFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component_config
     */
    select?: component_configSelect<ExtArgs> | null
    /**
     * Filter, which component_config to fetch.
     */
    where?: component_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of component_configs to fetch.
     */
    orderBy?: component_configOrderByWithRelationInput | component_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for component_configs.
     */
    cursor?: component_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` component_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` component_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of component_configs.
     */
    distinct?: Component_configScalarFieldEnum | Component_configScalarFieldEnum[]
  }


  /**
   * component_config findFirstOrThrow
   */
  export type component_configFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component_config
     */
    select?: component_configSelect<ExtArgs> | null
    /**
     * Filter, which component_config to fetch.
     */
    where?: component_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of component_configs to fetch.
     */
    orderBy?: component_configOrderByWithRelationInput | component_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for component_configs.
     */
    cursor?: component_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` component_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` component_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of component_configs.
     */
    distinct?: Component_configScalarFieldEnum | Component_configScalarFieldEnum[]
  }


  /**
   * component_config findMany
   */
  export type component_configFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component_config
     */
    select?: component_configSelect<ExtArgs> | null
    /**
     * Filter, which component_configs to fetch.
     */
    where?: component_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of component_configs to fetch.
     */
    orderBy?: component_configOrderByWithRelationInput | component_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing component_configs.
     */
    cursor?: component_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` component_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` component_configs.
     */
    skip?: number
    distinct?: Component_configScalarFieldEnum | Component_configScalarFieldEnum[]
  }


  /**
   * component_config create
   */
  export type component_configCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component_config
     */
    select?: component_configSelect<ExtArgs> | null
    /**
     * The data needed to create a component_config.
     */
    data: XOR<component_configCreateInput, component_configUncheckedCreateInput>
  }


  /**
   * component_config createMany
   */
  export type component_configCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many component_configs.
     */
    data: component_configCreateManyInput | component_configCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * component_config update
   */
  export type component_configUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component_config
     */
    select?: component_configSelect<ExtArgs> | null
    /**
     * The data needed to update a component_config.
     */
    data: XOR<component_configUpdateInput, component_configUncheckedUpdateInput>
    /**
     * Choose, which component_config to update.
     */
    where: component_configWhereUniqueInput
  }


  /**
   * component_config updateMany
   */
  export type component_configUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update component_configs.
     */
    data: XOR<component_configUpdateManyMutationInput, component_configUncheckedUpdateManyInput>
    /**
     * Filter which component_configs to update
     */
    where?: component_configWhereInput
  }


  /**
   * component_config upsert
   */
  export type component_configUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component_config
     */
    select?: component_configSelect<ExtArgs> | null
    /**
     * The filter to search for the component_config to update in case it exists.
     */
    where: component_configWhereUniqueInput
    /**
     * In case the component_config found by the `where` argument doesn't exist, create a new component_config with this data.
     */
    create: XOR<component_configCreateInput, component_configUncheckedCreateInput>
    /**
     * In case the component_config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<component_configUpdateInput, component_configUncheckedUpdateInput>
  }


  /**
   * component_config delete
   */
  export type component_configDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component_config
     */
    select?: component_configSelect<ExtArgs> | null
    /**
     * Filter which component_config to delete.
     */
    where: component_configWhereUniqueInput
  }


  /**
   * component_config deleteMany
   */
  export type component_configDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which component_configs to delete
     */
    where?: component_configWhereInput
  }


  /**
   * component_config without action
   */
  export type component_configDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component_config
     */
    select?: component_configSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type component_configWhereInput = {
    AND?: component_configWhereInput | component_configWhereInput[]
    OR?: component_configWhereInput[]
    NOT?: component_configWhereInput | component_configWhereInput[]
    id?: IntFilter<"component_config"> | number
    domain?: StringFilter<"component_config"> | string
    props?: JsonFilter<"component_config">
    groups?: JsonFilter<"component_config">
  }

  export type component_configOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type component_configWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: component_configWhereInput | component_configWhereInput[]
    OR?: component_configWhereInput[]
    NOT?: component_configWhereInput | component_configWhereInput[]
    props?: JsonFilter<"component_config">
    groups?: JsonFilter<"component_config">
  }, "id" | "domain">

  export type component_configOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: component_configCountOrderByAggregateInput
    _avg?: component_configAvgOrderByAggregateInput
    _max?: component_configMaxOrderByAggregateInput
    _min?: component_configMinOrderByAggregateInput
    _sum?: component_configSumOrderByAggregateInput
  }

  export type component_configScalarWhereWithAggregatesInput = {
    AND?: component_configScalarWhereWithAggregatesInput | component_configScalarWhereWithAggregatesInput[]
    OR?: component_configScalarWhereWithAggregatesInput[]
    NOT?: component_configScalarWhereWithAggregatesInput | component_configScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"component_config"> | number
    domain?: StringWithAggregatesFilter<"component_config"> | string
    props?: JsonWithAggregatesFilter<"component_config">
    groups?: JsonWithAggregatesFilter<"component_config">
  }

  export type component_configCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type component_configUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type component_configUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type component_configUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type component_configCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type component_configUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type component_configUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type component_configCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type component_configAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type component_configMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type component_configMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type component_configSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use component_configDefaultArgs instead
     */
    export type component_configArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = component_configDefaultArgs<ExtArgs>

    export const Component_configScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Component_configScalarFieldEnum = (typeof Component_configScalarFieldEnum)[keyof typeof Component_configScalarFieldEnum]
    