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

export type authenticator_config = $Result.DefaultSelection<$authenticator_configPayload>


/**
   * Model authenticator_config
   */

export type AggregateAuthenticator_config = {
    _count: Authenticator_configCountAggregateOutputType | null
    _avg: Authenticator_configAvgAggregateOutputType | null
    _sum: Authenticator_configSumAggregateOutputType | null
    _min: Authenticator_configMinAggregateOutputType | null
    _max: Authenticator_configMaxAggregateOutputType | null
  }

  export type Authenticator_configAvgAggregateOutputType = {
    id: number | null
  }

  export type Authenticator_configSumAggregateOutputType = {
    id: number | null
  }

  export type Authenticator_configMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Authenticator_configMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Authenticator_configCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Authenticator_configAvgAggregateInputType = {
    id?: true
  }

  export type Authenticator_configSumAggregateInputType = {
    id?: true
  }

  export type Authenticator_configMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Authenticator_configMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Authenticator_configCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Authenticator_configAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authenticator_config to aggregate.
     */
    where?: authenticator_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authenticator_configs to fetch.
     */
    orderBy?: authenticator_configOrderByWithRelationInput | authenticator_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authenticator_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authenticator_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authenticator_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authenticator_configs
    **/
    _count?: true | Authenticator_configCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Authenticator_configAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Authenticator_configSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Authenticator_configMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Authenticator_configMaxAggregateInputType
  }

  export type GetAuthenticator_configAggregateType<T extends Authenticator_configAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthenticator_config]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthenticator_config[P]>
      : GetScalarType<T[P], AggregateAuthenticator_config[P]>
  }




  export type authenticator_configGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authenticator_configWhereInput
    orderBy?: authenticator_configOrderByWithAggregationInput | authenticator_configOrderByWithAggregationInput[]
    by: Authenticator_configScalarFieldEnum[] | Authenticator_configScalarFieldEnum
    having?: authenticator_configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Authenticator_configCountAggregateInputType | true
    _avg?: Authenticator_configAvgAggregateInputType
    _sum?: Authenticator_configSumAggregateInputType
    _min?: Authenticator_configMinAggregateInputType
    _max?: Authenticator_configMaxAggregateInputType
  }

  export type Authenticator_configGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Authenticator_configCountAggregateOutputType | null
    _avg: Authenticator_configAvgAggregateOutputType | null
    _sum: Authenticator_configSumAggregateOutputType | null
    _min: Authenticator_configMinAggregateOutputType | null
    _max: Authenticator_configMaxAggregateOutputType | null
  }

  type GetAuthenticator_configGroupByPayload<T extends authenticator_configGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Authenticator_configGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Authenticator_configGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Authenticator_configGroupByOutputType[P]>
            : GetScalarType<T[P], Authenticator_configGroupByOutputType[P]>
        }
      >
    >


  export type authenticator_configSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["authenticator_config"]>

  export type authenticator_configSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $authenticator_configPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authenticator_config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["authenticator_config"]>
    composites: {}
  }


  type authenticator_configGetPayload<S extends boolean | null | undefined | authenticator_configDefaultArgs> = $Result.GetResult<$authenticator_configPayload, S>

  type authenticator_configCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<authenticator_configFindManyArgs, 'select' | 'include'> & {
      select?: Authenticator_configCountAggregateInputType | true
    }

  export interface authenticator_configDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['authenticator_config'], meta: { name: 'authenticator_config' } }
    /**
     * Find zero or one Authenticator_config that matches the filter.
     * @param {authenticator_configFindUniqueArgs} args - Arguments to find a Authenticator_config
     * @example
     * // Get one Authenticator_config
     * const authenticator_config = await prisma.authenticator_config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends authenticator_configFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, authenticator_configFindUniqueArgs<ExtArgs>>
    ): Prisma__authenticator_configClient<$Result.GetResult<$authenticator_configPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Authenticator_config that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {authenticator_configFindUniqueOrThrowArgs} args - Arguments to find a Authenticator_config
     * @example
     * // Get one Authenticator_config
     * const authenticator_config = await prisma.authenticator_config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends authenticator_configFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, authenticator_configFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__authenticator_configClient<$Result.GetResult<$authenticator_configPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Authenticator_config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticator_configFindFirstArgs} args - Arguments to find a Authenticator_config
     * @example
     * // Get one Authenticator_config
     * const authenticator_config = await prisma.authenticator_config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends authenticator_configFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, authenticator_configFindFirstArgs<ExtArgs>>
    ): Prisma__authenticator_configClient<$Result.GetResult<$authenticator_configPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Authenticator_config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticator_configFindFirstOrThrowArgs} args - Arguments to find a Authenticator_config
     * @example
     * // Get one Authenticator_config
     * const authenticator_config = await prisma.authenticator_config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends authenticator_configFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, authenticator_configFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__authenticator_configClient<$Result.GetResult<$authenticator_configPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Authenticator_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticator_configFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authenticator_configs
     * const authenticator_configs = await prisma.authenticator_config.findMany()
     * 
     * // Get first 10 Authenticator_configs
     * const authenticator_configs = await prisma.authenticator_config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authenticator_configWithIdOnly = await prisma.authenticator_config.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends authenticator_configFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authenticator_configFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$authenticator_configPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Authenticator_config.
     * @param {authenticator_configCreateArgs} args - Arguments to create a Authenticator_config.
     * @example
     * // Create one Authenticator_config
     * const Authenticator_config = await prisma.authenticator_config.create({
     *   data: {
     *     // ... data to create a Authenticator_config
     *   }
     * })
     * 
    **/
    create<T extends authenticator_configCreateArgs<ExtArgs>>(
      args: SelectSubset<T, authenticator_configCreateArgs<ExtArgs>>
    ): Prisma__authenticator_configClient<$Result.GetResult<$authenticator_configPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Authenticator_configs.
     *     @param {authenticator_configCreateManyArgs} args - Arguments to create many Authenticator_configs.
     *     @example
     *     // Create many Authenticator_configs
     *     const authenticator_config = await prisma.authenticator_config.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends authenticator_configCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authenticator_configCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Authenticator_config.
     * @param {authenticator_configDeleteArgs} args - Arguments to delete one Authenticator_config.
     * @example
     * // Delete one Authenticator_config
     * const Authenticator_config = await prisma.authenticator_config.delete({
     *   where: {
     *     // ... filter to delete one Authenticator_config
     *   }
     * })
     * 
    **/
    delete<T extends authenticator_configDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, authenticator_configDeleteArgs<ExtArgs>>
    ): Prisma__authenticator_configClient<$Result.GetResult<$authenticator_configPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Authenticator_config.
     * @param {authenticator_configUpdateArgs} args - Arguments to update one Authenticator_config.
     * @example
     * // Update one Authenticator_config
     * const authenticator_config = await prisma.authenticator_config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends authenticator_configUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, authenticator_configUpdateArgs<ExtArgs>>
    ): Prisma__authenticator_configClient<$Result.GetResult<$authenticator_configPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Authenticator_configs.
     * @param {authenticator_configDeleteManyArgs} args - Arguments to filter Authenticator_configs to delete.
     * @example
     * // Delete a few Authenticator_configs
     * const { count } = await prisma.authenticator_config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends authenticator_configDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authenticator_configDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authenticator_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticator_configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authenticator_configs
     * const authenticator_config = await prisma.authenticator_config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends authenticator_configUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, authenticator_configUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Authenticator_config.
     * @param {authenticator_configUpsertArgs} args - Arguments to update or create a Authenticator_config.
     * @example
     * // Update or create a Authenticator_config
     * const authenticator_config = await prisma.authenticator_config.upsert({
     *   create: {
     *     // ... data to create a Authenticator_config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authenticator_config we want to update
     *   }
     * })
    **/
    upsert<T extends authenticator_configUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, authenticator_configUpsertArgs<ExtArgs>>
    ): Prisma__authenticator_configClient<$Result.GetResult<$authenticator_configPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Authenticator_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticator_configCountArgs} args - Arguments to filter Authenticator_configs to count.
     * @example
     * // Count the number of Authenticator_configs
     * const count = await prisma.authenticator_config.count({
     *   where: {
     *     // ... the filter for the Authenticator_configs we want to count
     *   }
     * })
    **/
    count<T extends authenticator_configCountArgs>(
      args?: Subset<T, authenticator_configCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Authenticator_configCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authenticator_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Authenticator_configAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Authenticator_configAggregateArgs>(args: Subset<T, Authenticator_configAggregateArgs>): PrismaPromise<GetAuthenticator_configAggregateType<T>>

    /**
     * Group by Authenticator_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticator_configGroupByArgs} args - Group by arguments.
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
      T extends authenticator_configGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authenticator_configGroupByArgs['orderBy'] }
        : { orderBy?: authenticator_configGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, authenticator_configGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticator_configGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the authenticator_config model
   */
  readonly fields: authenticator_configFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authenticator_config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authenticator_configClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the authenticator_config model
   */ 
  interface authenticator_configFieldRefs {
    readonly id: FieldRef<"authenticator_config", 'Int'>
    readonly domain: FieldRef<"authenticator_config", 'String'>
    readonly props: FieldRef<"authenticator_config", 'Json'>
    readonly groups: FieldRef<"authenticator_config", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * authenticator_config findUnique
   */
  export type authenticator_configFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config
     */
    select?: authenticator_configSelect<ExtArgs> | null
    /**
     * Filter, which authenticator_config to fetch.
     */
    where: authenticator_configWhereUniqueInput
  }


  /**
   * authenticator_config findUniqueOrThrow
   */
  export type authenticator_configFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config
     */
    select?: authenticator_configSelect<ExtArgs> | null
    /**
     * Filter, which authenticator_config to fetch.
     */
    where: authenticator_configWhereUniqueInput
  }


  /**
   * authenticator_config findFirst
   */
  export type authenticator_configFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config
     */
    select?: authenticator_configSelect<ExtArgs> | null
    /**
     * Filter, which authenticator_config to fetch.
     */
    where?: authenticator_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authenticator_configs to fetch.
     */
    orderBy?: authenticator_configOrderByWithRelationInput | authenticator_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authenticator_configs.
     */
    cursor?: authenticator_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authenticator_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authenticator_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authenticator_configs.
     */
    distinct?: Authenticator_configScalarFieldEnum | Authenticator_configScalarFieldEnum[]
  }


  /**
   * authenticator_config findFirstOrThrow
   */
  export type authenticator_configFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config
     */
    select?: authenticator_configSelect<ExtArgs> | null
    /**
     * Filter, which authenticator_config to fetch.
     */
    where?: authenticator_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authenticator_configs to fetch.
     */
    orderBy?: authenticator_configOrderByWithRelationInput | authenticator_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authenticator_configs.
     */
    cursor?: authenticator_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authenticator_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authenticator_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authenticator_configs.
     */
    distinct?: Authenticator_configScalarFieldEnum | Authenticator_configScalarFieldEnum[]
  }


  /**
   * authenticator_config findMany
   */
  export type authenticator_configFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config
     */
    select?: authenticator_configSelect<ExtArgs> | null
    /**
     * Filter, which authenticator_configs to fetch.
     */
    where?: authenticator_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authenticator_configs to fetch.
     */
    orderBy?: authenticator_configOrderByWithRelationInput | authenticator_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authenticator_configs.
     */
    cursor?: authenticator_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authenticator_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authenticator_configs.
     */
    skip?: number
    distinct?: Authenticator_configScalarFieldEnum | Authenticator_configScalarFieldEnum[]
  }


  /**
   * authenticator_config create
   */
  export type authenticator_configCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config
     */
    select?: authenticator_configSelect<ExtArgs> | null
    /**
     * The data needed to create a authenticator_config.
     */
    data: XOR<authenticator_configCreateInput, authenticator_configUncheckedCreateInput>
  }


  /**
   * authenticator_config createMany
   */
  export type authenticator_configCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authenticator_configs.
     */
    data: authenticator_configCreateManyInput | authenticator_configCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * authenticator_config update
   */
  export type authenticator_configUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config
     */
    select?: authenticator_configSelect<ExtArgs> | null
    /**
     * The data needed to update a authenticator_config.
     */
    data: XOR<authenticator_configUpdateInput, authenticator_configUncheckedUpdateInput>
    /**
     * Choose, which authenticator_config to update.
     */
    where: authenticator_configWhereUniqueInput
  }


  /**
   * authenticator_config updateMany
   */
  export type authenticator_configUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authenticator_configs.
     */
    data: XOR<authenticator_configUpdateManyMutationInput, authenticator_configUncheckedUpdateManyInput>
    /**
     * Filter which authenticator_configs to update
     */
    where?: authenticator_configWhereInput
  }


  /**
   * authenticator_config upsert
   */
  export type authenticator_configUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config
     */
    select?: authenticator_configSelect<ExtArgs> | null
    /**
     * The filter to search for the authenticator_config to update in case it exists.
     */
    where: authenticator_configWhereUniqueInput
    /**
     * In case the authenticator_config found by the `where` argument doesn't exist, create a new authenticator_config with this data.
     */
    create: XOR<authenticator_configCreateInput, authenticator_configUncheckedCreateInput>
    /**
     * In case the authenticator_config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authenticator_configUpdateInput, authenticator_configUncheckedUpdateInput>
  }


  /**
   * authenticator_config delete
   */
  export type authenticator_configDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config
     */
    select?: authenticator_configSelect<ExtArgs> | null
    /**
     * Filter which authenticator_config to delete.
     */
    where: authenticator_configWhereUniqueInput
  }


  /**
   * authenticator_config deleteMany
   */
  export type authenticator_configDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authenticator_configs to delete
     */
    where?: authenticator_configWhereInput
  }


  /**
   * authenticator_config without action
   */
  export type authenticator_configDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config
     */
    select?: authenticator_configSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type authenticator_configWhereInput = {
    AND?: authenticator_configWhereInput | authenticator_configWhereInput[]
    OR?: authenticator_configWhereInput[]
    NOT?: authenticator_configWhereInput | authenticator_configWhereInput[]
    id?: IntFilter<"authenticator_config"> | number
    domain?: StringFilter<"authenticator_config"> | string
    props?: JsonFilter<"authenticator_config">
    groups?: JsonFilter<"authenticator_config">
  }

  export type authenticator_configOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type authenticator_configWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: authenticator_configWhereInput | authenticator_configWhereInput[]
    OR?: authenticator_configWhereInput[]
    NOT?: authenticator_configWhereInput | authenticator_configWhereInput[]
    props?: JsonFilter<"authenticator_config">
    groups?: JsonFilter<"authenticator_config">
  }, "id" | "domain">

  export type authenticator_configOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: authenticator_configCountOrderByAggregateInput
    _avg?: authenticator_configAvgOrderByAggregateInput
    _max?: authenticator_configMaxOrderByAggregateInput
    _min?: authenticator_configMinOrderByAggregateInput
    _sum?: authenticator_configSumOrderByAggregateInput
  }

  export type authenticator_configScalarWhereWithAggregatesInput = {
    AND?: authenticator_configScalarWhereWithAggregatesInput | authenticator_configScalarWhereWithAggregatesInput[]
    OR?: authenticator_configScalarWhereWithAggregatesInput[]
    NOT?: authenticator_configScalarWhereWithAggregatesInput | authenticator_configScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"authenticator_config"> | number
    domain?: StringWithAggregatesFilter<"authenticator_config"> | string
    props?: JsonWithAggregatesFilter<"authenticator_config">
    groups?: JsonWithAggregatesFilter<"authenticator_config">
  }

  export type authenticator_configCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_configUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_configUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_configUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_configCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_configUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_configUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_configCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type authenticator_configAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type authenticator_configMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type authenticator_configMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type authenticator_configSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use authenticator_configDefaultArgs instead
     */
    export type authenticator_configArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = authenticator_configDefaultArgs<ExtArgs>

    export const Authenticator_configScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Authenticator_configScalarFieldEnum = (typeof Authenticator_configScalarFieldEnum)[keyof typeof Authenticator_configScalarFieldEnum]
    